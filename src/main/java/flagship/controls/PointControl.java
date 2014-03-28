package flagship.controls;

import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import flagship.dao.LocationDao;
import flagship.dao.PointDao;
import flagship.dao.TransportDao;
import flagship.vo.JsonResult;
import flagship.vo.Point;

@Controller
@RequestMapping("/point")
public class PointControl {
	Logger log = Logger.getLogger(PointControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	PointDao pointDao;

	@Autowired(required=false)
	TransportDao transportDao;

	@Autowired(required=false)
	LocationDao locationDao;
	
//	@RequestMapping("/list")
//	public String list(Model model) throws Exception {
//		model.addAttribute("points", pointDao.selectAll());
//		return "point/list";
//	}
	
	@RequestMapping(value="/ajax/list", produces="application/json")
	public Object ajaxList(int no) throws Exception {
		List<Point> list =  pointDao.selectList(no);
		
		for(Point point : list) {
			point.setTransport(transportDao.selectOne(point.getNo()));
			point.setLocation(locationDao.selectOne(point.getLno()));
		}
		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
					.setData(list);
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
	}

	@RequestMapping(value="/ajax/listLast", produces="application/json")
	public Object ajaxListLast(int no) throws Exception {
		List<Point> list =  pointDao.selectList(no);
		
		for(Point point : list) {
			point.setTransport(transportDao.selectOne(point.getNo()));
		}
		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
					.setData(list.get(list.size()-1));
			
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/ajax/add",method=RequestMethod.POST, produces="application/json")
	public Object ajaxAdd(Point point) throws Exception {
		try {
			pointDao.insert(point);
			return new JsonResult()
				.setResultStatus(JsonResult.SUCCESS).setData(point);
		} catch(Throwable ex) {
			return new JsonResult()
				.setResultStatus(JsonResult.FAILURE)
				.setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/ajax/updateState",method=RequestMethod.POST, produces="application/json")
	public Object ajaxUpdateState(Point point) throws Exception {
		try {
			pointDao.updateState(point);
			return new JsonResult()
			.setResultStatus(JsonResult.SUCCESS);
		} catch(Throwable ex) {
			return new JsonResult()
			.setResultStatus(JsonResult.FAILURE)
			.setError(ex.getMessage());
		}
	}
}
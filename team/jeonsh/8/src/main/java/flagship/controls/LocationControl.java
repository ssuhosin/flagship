package flagship.controls;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import flagship.dao.LocationDao;
import flagship.dao.PhotoDao;
import flagship.dao.PointDao;
import flagship.vo.JsonResult;
import flagship.vo.Location;

@Controller
@RequestMapping("/location")
public class LocationControl {
	Logger log = Logger.getLogger(LocationControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	LocationDao locationDao;

	@Autowired(required=false)
	PointDao pointDao;

	@Autowired(required=false)
	PhotoDao photoDao;

	
//	@RequestMapping("/list")
//	public String list(Model model) throws Exception {
//		model.addAttribute("points", pointDao.selectAll());
//		return "point/list";
//	}
	
//	@RequestMapping(value="/ajax/list", produces="application/json")
//	public Object ajaxList() throws Exception {
//		List<Location> list =  locationDao.selectAll();
//		
//		try {
//			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
//					.setData(list);
//			
//		} catch (Throwable ex) {
//			return new JsonResult().setResultStatus(JsonResult.FAILURE)
//					.setError(ex.getMessage());
//		}
//	}

	@RequestMapping(value="/ajax/list", produces="application/json")
	public Object ajaxList(int no) throws Exception {
		List<Location> list =  locationDao.selectList(no);
		
		for(Location location : list) {
			location.setPhotos(photoDao.selectList(location.getNo()));
		}
		
		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
					.setData(list);
			
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
	}
	
	@RequestMapping(value="/ajax/add",method=RequestMethod.POST, produces="application/json")
	public Object ajaxAdd(int pno, String title, String description) throws Exception {
		HashMap<String,Integer> sqlparamMap = new HashMap<String,Integer>();
		sqlparamMap.put("no", pno);
		try {
			Location location = new Location();
			location.setTitle(title);
			location.setDescription(description);
			
			locationDao.insert(location);
			sqlparamMap.put("lno", location.getNo());
			pointDao.updateLocation(sqlparamMap);
			return new JsonResult()
				.setResultStatus(JsonResult.SUCCESS);
		} catch(Throwable ex) {
			return new JsonResult()
				.setResultStatus(JsonResult.FAILURE)
				.setError(ex.getMessage());
		}
	}
}
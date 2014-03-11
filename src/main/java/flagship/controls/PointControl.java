package flagship.controls;

import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import flagship.dao.PointDao;
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
	
//	@RequestMapping("/list")
//	public String list(Model model) throws Exception {
//		model.addAttribute("points", pointDao.selectAll());
//		return "point/list";
//	}
	
	@RequestMapping(value="/ajax/list", produces="application/json")
	public Object ajaxList() throws Exception {
		List<Point> list =  pointDao.selectAll();
		List<Point> list1 =  pointDao.selectAll();
		List<Point> list2 =  pointDao.selectAll();
		
		
		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
					.setData(list);
			
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
		
	}
}
package flagship.controls;

import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import flagship.dao.LocationDao;
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

	
//	@RequestMapping("/list")
//	public String list(Model model) throws Exception {
//		model.addAttribute("points", pointDao.selectAll());
//		return "point/list";
//	}
	
	@RequestMapping(value="/ajax/list", produces="application/json")
	public Object ajaxList() throws Exception {
		List<Location> list =  locationDao.selectAll();
		
		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
					.setData(list);
			
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
		
	}
}
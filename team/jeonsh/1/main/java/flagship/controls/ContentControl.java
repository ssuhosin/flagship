package flagship.controls;

import java.util.List;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import flagship.dao.ContentDao;
import flagship.vo.Content;
import flagship.vo.JsonResult;

@Controller
@RequestMapping("/content")
public class ContentControl {
	Logger log = Logger.getLogger(ContentControl.class);
	
	@Autowired
	ServletContext servletContext;
	
	@Autowired(required=false)
	ContentDao contentDao;

	
//	@RequestMapping("/list")
//	public String list(Model model) throws Exception {
//		model.addAttribute("points", pointDao.selectAll());
//		return "point/list";
//	}
	
	@RequestMapping(value="/ajax/list", produces="application/json")
	public Object ajaxList() throws Exception {
		List<Content> list =  contentDao.selectList(2);
		
		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS) 
					.setData(list);
			
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
		
	}
}
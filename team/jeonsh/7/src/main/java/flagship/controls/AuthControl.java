package flagship.controls;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import flagship.dao.MemberDao;
import flagship.vo.JsonResult;
//import flagship.dao.MemberDao;
import flagship.vo.Member;

@Controller
@RequestMapping("/auth")
@SessionAttributes("loginUser") // 모델에 들어 있는 값 중에서 loginUser는 세션에 보관하라.
public class AuthControl {
	@Autowired(required=false)
	MemberDao memberDao;
	
	
	@RequestMapping(value="/ajax/login",method=RequestMethod.POST,produces="application/json")
	public Object login(String email, String password) throws Exception {
		HashMap<String,String> sqlparamMap = new HashMap<String,String>();
		sqlparamMap.put("email", email);
		sqlparamMap.put("password", password);
		
		Member member = memberDao.selectByEmailPassword(sqlparamMap);

		try {
			return new JsonResult().setResultStatus(JsonResult.SUCCESS).setData(member);
			
		} catch (Throwable ex) {
			return new JsonResult().setResultStatus(JsonResult.FAILURE)
					.setError(ex.getMessage());
		}
  }
}











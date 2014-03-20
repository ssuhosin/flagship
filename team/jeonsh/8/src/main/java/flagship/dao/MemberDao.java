package flagship.dao;

import java.util.Map;

import flagship.vo.Member;

public interface MemberDao {
	public Member selectByEmailPassword(Map<String,String> paramMap)  
			throws Exception;
}

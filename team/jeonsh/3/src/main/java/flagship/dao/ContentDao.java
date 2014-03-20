package flagship.dao;

import java.util.List;

import flagship.vo.Content;

public interface ContentDao {
	public List<Content> selectList(int no) throws Exception;
}

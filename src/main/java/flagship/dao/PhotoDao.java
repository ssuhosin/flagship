package flagship.dao;

import java.util.List;

import flagship.vo.Photo;

public interface PhotoDao {
	public List<Photo> selectList(int no) throws Exception;
	public void insert(Photo photo) throws Exception;
}

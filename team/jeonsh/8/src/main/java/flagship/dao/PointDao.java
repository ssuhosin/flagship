package flagship.dao;

import java.util.List;
import java.util.Map;

import flagship.vo.Point;

public interface PointDao {
	public List<Point> selectAll() throws Exception;
	public List<Point> selectList(int no) throws Exception;
	public void insert(Point point) throws Exception;
	public void updateState(Point point) throws Exception;
	public void updateLocation(Map<String,Integer> paramMap) throws Exception;
}

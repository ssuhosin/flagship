package flagship.dao;

import java.util.List;

import flagship.vo.Point;

public interface PointDao {
	public List<Point> selectAll() throws Exception;
}

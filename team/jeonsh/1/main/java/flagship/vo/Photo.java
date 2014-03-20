package flagship.vo;

import java.io.Serializable;

public class Photo implements Serializable {
  private static final long serialVersionUID = 1L;
	protected int no;
	protected int path;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getPath() {
		return path;
	}
	public void setPath(int path) {
		this.path = path;
	}
	
	@Override
  public int hashCode() {
	  final int prime = 31;
	  int result = 1;
	  result = prime * result + no;
	  result = prime * result + path;
	  return result;
  }
	
	@Override
  public boolean equals(Object obj) {
	  if (this == obj)
		  return true;
	  if (obj == null)
		  return false;
	  if (getClass() != obj.getClass())
		  return false;
	  Photo other = (Photo) obj;
	  if (no != other.no)
		  return false;
	  if (path != other.path)
		  return false;
	  return true;
  }
	@Override
  public String toString() {
	  return "Photo [no=" + no + ", path=" + path + "]";
  }
	
}

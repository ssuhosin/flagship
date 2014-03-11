package flagship.vo;

import java.io.Serializable;
import java.sql.Date;

public class Content implements Serializable {
  private static final long serialVersionUID = 1L;
  protected int no;
  protected String title;
  protected Date cdate;
  protected String path;

  public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Date getCdate() {
		return cdate;
	}
	public void setCdate(Date cdate) {
		this.cdate = cdate;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	@Override
  public int hashCode() {
	  final int prime = 31;
	  int result = 1;
	  result = prime * result + ((cdate == null) ? 0 : cdate.hashCode());
	  result = prime * result + no;
	  result = prime * result + ((path == null) ? 0 : path.hashCode());
	  result = prime * result + ((title == null) ? 0 : title.hashCode());
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
	  Content other = (Content) obj;
	  if (cdate == null) {
		  if (other.cdate != null)
			  return false;
	  } else if (!cdate.equals(other.cdate))
		  return false;
	  if (no != other.no)
		  return false;
	  if (path == null) {
		  if (other.path != null)
			  return false;
	  } else if (!path.equals(other.path))
		  return false;
	  if (title == null) {
		  if (other.title != null)
			  return false;
	  } else if (!title.equals(other.title))
		  return false;
	  return true;
  }
	@Override
  public String toString() {
	  return "Content [no=" + no + ", title=" + title + ", cdate=" + cdate
	      + ", path=" + path + "]";
  }
}

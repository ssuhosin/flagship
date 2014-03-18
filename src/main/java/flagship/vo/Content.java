package flagship.vo;

import java.io.Serializable;
import java.sql.Date;

public class Content implements Serializable {
  private static final long serialVersionUID = 1L;
  protected int no;
  protected int mno;
  protected String title;
  protected Date cdate;
  protected String path;
  protected int freq;
	protected int speed;
	protected int state;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getMno() {
		return mno;
	}
	public void setMno(int mno) {
		this.mno = mno;
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
	public int getFreq() {
		return freq;
	}
	public void setFreq(int freq) {
		this.freq = freq;
	}
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	@Override
  public int hashCode() {
	  final int prime = 31;
	  int result = 1;
	  result = prime * result + ((cdate == null) ? 0 : cdate.hashCode());
	  result = prime * result + freq;
	  result = prime * result + mno;
	  result = prime * result + no;
	  result = prime * result + ((path == null) ? 0 : path.hashCode());
	  result = prime * result + speed;
	  result = prime * result + state;
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
	  if (freq != other.freq)
		  return false;
	  if (mno != other.mno)
		  return false;
	  if (no != other.no)
		  return false;
	  if (path == null) {
		  if (other.path != null)
			  return false;
	  } else if (!path.equals(other.path))
		  return false;
	  if (speed != other.speed)
		  return false;
	  if (state != other.state)
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
	  return "Content [no=" + no + ", mno=" + mno + ", title=" + title
	      + ", cdate=" + cdate + ", path=" + path + ", freq=" + freq + ", speed="
	      + speed + ", state=" + state + "]";
  }
	
}

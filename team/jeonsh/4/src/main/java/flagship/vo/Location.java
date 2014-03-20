package flagship.vo;

import java.io.Serializable;
import java.util.List;

public class Location implements Serializable{
  private static final long serialVersionUID = 1L;
  protected int no;
	protected String title;
	protected String description;
	protected List<Photo> photos;

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(List<Photo> photos) {
		this.photos = photos;
	}

	@Override
  public int hashCode() {
	  final int prime = 31;
	  int result = 1;
	  result = prime * result
	      + ((description == null) ? 0 : description.hashCode());
	  result = prime * result + no;
	  result = prime * result + ((photos == null) ? 0 : photos.hashCode());
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
	  Location other = (Location) obj;
	  if (description == null) {
		  if (other.description != null)
			  return false;
	  } else if (!description.equals(other.description))
		  return false;
	  if (no != other.no)
		  return false;
	  if (photos == null) {
		  if (other.photos != null)
			  return false;
	  } else if (!photos.equals(other.photos))
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
	  return "Location [no=" + no + ", title=" + title + ", description="
	      + description + ", photos=" + photos + "]";
  }
	
	
	
}

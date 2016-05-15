class HomeController < ApplicationController
  def index
    
  end
  
  
  def pubmaker
    
  end
  
  def pubwrite
    post = Store.new
    post.major = params[:major]
    post.concept = params[:concept]
    post.poster = params[:poster]
    post.closing_time = params[:closing_time]
    post.save
    
    redirect_to "/home/pub"
  end
  
  def pub
    @post = Store.all
  end
end

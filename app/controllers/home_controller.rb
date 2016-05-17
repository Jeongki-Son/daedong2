class HomeController < ApplicationController
  def index
     @posts = Post.all
  end
  
  def send_msg
    p = Post.new
    p.content = params[:content]
    p.save
    
     Pusher['onlyone'].trigger('new_message', {
      message: params[:content]
    })
    
     
    render :text => ""
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

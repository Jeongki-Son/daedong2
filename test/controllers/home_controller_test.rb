require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get pub" do
    get :pub
    assert_response :success
  end

  test "should get pubmaker" do
    get :pubmaker
    assert_response :success
  end

end

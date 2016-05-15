class Store < ActiveRecord::Base
    has_many :products
    mount_uploader :poster, DaedongUploader
end

class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      
      t.string :food
      t.integer :price

      t.timestamps null: false
    end
  end
end

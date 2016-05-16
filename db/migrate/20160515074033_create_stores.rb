class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      
      t.string :major
      t.string :concept
      t.string :poster
      t.text :closing_time

      t.timestamps null: false
    end
  end
end

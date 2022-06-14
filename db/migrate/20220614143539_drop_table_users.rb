class DropTableUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :users do |t|
      t.string "name"
      t.string "icon"
      t.string "introduction"
      t.timestamps null: false
    end
  end
end

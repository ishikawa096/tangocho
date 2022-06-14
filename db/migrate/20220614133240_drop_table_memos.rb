class DropTableMemos < ActiveRecord::Migration[6.1]
  def change
    drop_table :memos do |t|
      t.string :content
      t.timestamps null: false
    end
  end
end

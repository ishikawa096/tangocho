class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :word, null: false
      t.string :answer
      t.string :status
      t.integer :book_id

      t.timestamps
    end
  end
end

class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable # , :trackable,
    # :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  has_many :cards, dependent: :destroy
  has_many :books, dependent: :destroy
end

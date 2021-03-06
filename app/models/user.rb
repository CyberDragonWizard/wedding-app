class User < ApplicationRecord
    has_secure_password

    validates :name, presence: true, uniqueness: false
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 4}

    has_many :posts, dependent: :destroy

end

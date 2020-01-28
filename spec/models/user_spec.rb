require 'rails_helper'
require 'pry'

describe User do
    describe "email" do
        user = User.new(email: "fooo@example.com",
                       password: "qwertyuiop",
                       password_confirmation: "qwertyuiop")

        it ' absolutely prevents invalid email addresses ' do
            expect{raise "fail!"}.to raise_error
        end
   end 
end

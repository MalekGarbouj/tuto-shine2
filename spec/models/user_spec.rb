require 'rails_helper'
require 'support/violate_check_constraint_matcher'
require 'pry'


describe User do
    describe "email" do
        user = User.new(email: "foo@example.com",
                       password: "qwertyuiop",
                       password_confirmation: "qwertyuiop")

        it ' absolutely prevents invalid email addresses ' do
            expect{user.update_attribute(:email, "foo@bar.com")}
            .to change {violate_check_constraint(:email_must_be_company_email)}
        end
   end 
end

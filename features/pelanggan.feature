Feature: Pelanggan kasirAja

    Scenario Outline: As a user, I can see error alert field <field>

        Given I am on the login page
        When I login with "tokop@edi.com" and "larismanis"
        And I click menu pelanggan
        And I click button tambah
        And I <scenario> field
        And I click button simpan
        Then I should see error alert message <message>

        Examples:
            | field | scenario                   | message                           |
            | nama  | dont fill any              | "name" is not allowed to be empty |
            | no.hp | fill invalid data to no.hp | "phone" must be a number          |

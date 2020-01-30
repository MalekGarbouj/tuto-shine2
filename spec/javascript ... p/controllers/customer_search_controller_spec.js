describe("CustomerSearchController", function() {
    describe("Error Handling", function() {

        var scpoe       = null,
            controller  = null,
            httpBackend = null,
            serverResults = [
                {
                    id: 123,
                    first_name: "Bob",
                    last_name: "Jones",
                    email: "bjones@foo.net",
                    username: "jonesy"
                },
                {
                    id: 456,
                    first_name: "Bob",
                    last_name: "Johnsons",
                    email: "johnboy@bar.info",
                    username: "bobbyj"
                }
            ];

        beforeEach(module("customers"));

        beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
            scope       = $rootScope.$new();
            httpBackend = $httpBackend
            controller  = $controller("CustomerSearchController", {
                $scope: scpoe
            });
        }));

        it("defaults to an empty customer list", function() {
            expect(scope.customers).toBe([]);
        });

        it("defaults to an empty customer list", function() {
            expect(scpoe.customers).toEqualData([]);
        }); 
        
        beforeEach(function() {
            httpBackend.when('GET','/customers.json?keywords=bob&page=0')
                       .respond(500,'Internal Server Error');
            spyOn(window, "alert");           
        });

        it("alert the user on an error", function() {
            scope.search("bob");
            httpBackend.flush();
            expect(scpoe.customers).toEqualData([]);
            expect(window.alert).toHaveBeenCalledWith("there was a problem: 500");
        });
        
    });
});
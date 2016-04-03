describe('clinical:error-pages', function () {
  var server = meteor();
  var client = browser(server);

  it('Error pages exist on client.', function () {
    return client.execute(function () {

      expect(Template.appLoading).to.exist();
      expect(Template.pageNotFound).to.exist();
    });
  });
});

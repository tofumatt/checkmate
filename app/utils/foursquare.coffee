# This is our compact Foursquare API library. It makes requests to the
# Foursquare API using the currently signed-in user's API token and handles
# any specialities in the Foursquare API. Uses the v2 Foursquare API (for now,
# as defined in globals.coffee).
#
# Expected usage would be to require() the library as such:
#
#    import foursquare
#    foursquare.request 'venues/explore',
#      data:
#        lat: 45
#        lng: 34
#    .then (response) ->
#      alert(response)
foursquare = () ->
  # Used across the app to make a request to the Foursquare API with the
  # current user's credentials. The first argument is the URL of the API
  # endpoint after the version in the URL. eg: request('venues/explore')
  # will make a request to https://api.foursquare.com/v2/venues/explore,
  # including the required OAuth and version arguments.
  # All requests are sent over HTTPS.
  request = (url, args = {}) ->
    if GLOBALS and GLOABLS.TOKEN
      data = {
        oauth_token: GLOBALS.TOKEN
        v: GLOBALS.API_DATE
      }
    else
      data = {
        v: GLOBALS.API_DATE
      }

    $.extend data, args.data if args.data

    console.debug "#{args.requestMethod || 'GET'} /#{url}", data

    # Get information about this user.
    $.ajax
      type: args.requestMethod || "GET"
      data: data
      dataType: 'json'
      url: "#{window.GLOBALS.API_URL}#{url}"
      success: defaultSuccessHandler
      error: defaultErrorHander

  # Upload abstraction, mainly used for uploading photos to checkins, venues,
  # etc. The postData object should include a "file" attribute we will use for
  # uploading. We use a raw XMLHttpRequest here to maintain tighter control
  # over the upload process and to use FormData.
  upload = (url, postData = {}) ->
    return new Promise (resolve, reject) ->
      data = {
        oauth_token: GLOBALS.TOKEN
        v: GLOBALS.API_DATE
      }

      $.extend data, postData if postData

      request = new XMLHttpRequest()

      formData = new FormData()
      for k, v of data
        formData.append k, v

      console.debug "UPLOAD (POST) /#{url}", data

      request.open 'POST', "#{window.GLOBALS.API_URL}photos/add", true
      request.responseType = 'json'

      request.addEventListener 'error', d.reject
      request.addEventListener 'readystatechange', ->
        resolve(request.response) if request.readyState is 4 # readyState DONE

      request.send(formData)

  # The default error handler for requests to Foursquare that don't define
  # their own error handler. Simply spits out raw error information.
  defaultErrorHander = (xhr, errorType, error) ->
    console.error "Foursquare API Error | #{xhr.status}", xhr, errorType, error

  # The default success handler for requests to Foursquare that don't define
  # their own success handler. Outputs the request to the console with INFO
  # level. This will always be called when using promises.
  defaultSuccessHandler = (response, status, xhr) ->
    console.info "Foursquare API Response | #{xhr.status}", response, xhr

  return {
    request: request
    upload: upload
  }

`export default foursquare`

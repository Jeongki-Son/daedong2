CarrierWave.configure do |config|
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     'AKIAIEN5Y7WVOCIJ4VTQ',                        # required
    aws_secret_access_key: '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',                        # required
    region:                'ap-northeast-2',                  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'cacao1111'                          # required
end
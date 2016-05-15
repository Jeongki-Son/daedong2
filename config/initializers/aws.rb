CarrierWave.configure do |config|
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     'AKIAII3YO2TRWNU6OCXA',                        # required
    aws_secret_access_key: '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',                        # required
    region:                'ap-northeast-2',                  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'daedong2'                          # required
end
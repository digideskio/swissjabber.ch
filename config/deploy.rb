require 'rake/file_list'

set :application, 'swissjabber.ch'
set :repository, '.'
set :scm, :none

ssh_options[:forward_agent] = true
set :use_sudo, false
set :user, 'www-data'

server 'swissjabber2.nine.ch', :web, primary: true
set :branch, 'master'

set :deploy_to, '/home/www-data/swissjabber.ch'

set :build_script, 'middleman build'
set :deploy_via, :copy
set :copy_exclude, Rake::FileList['{*,.*}'].exclude('public').exclude('.')

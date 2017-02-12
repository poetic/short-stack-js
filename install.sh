#!/bin/bash
set -e

command_exists () {
  type "$1" &> /dev/null ;
}

echo 'Installing short-stack...'

# Install xcode command line tools
if [[ ! -x `xcode-select -p 2>/dev/null` ]]; then
  xcode-select --install
  echo 'Press any key when the installation has completed.'
  read -n 1
fi

# Install homebrew
if ! command_exists brew; then
  echo 'Installing homebrew...'
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# Install ansible
if ! command_exists ansible; then
  echo 'Installing ansible...'
  brew install ansible
fi

# Clone short-stack
if [[ ! -d ~/short-stack ]]; then
  git clone https://github.com/short-stack/short-stack.git ~/.short-stack
fi

# Install short-stack command
if [[ ! -L /usr/local/bin/short-stack ]]; then
  sudo ln -s ~/.short-stack/short-stack /usr/local/bin/short-stack
fi

# Run short-stack unless skip flag present
if [[ $1 != "--skip-short-stack" ]]; then
  short-stack
fi

setopt no_nomatch
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/brianmathewdejesus/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/brianmathewdejesus/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/brianmathewdejesus/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/brianmathewdejesus/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
eval "$(/opt/homebrew/bin/brew shellenv)"
export PATH="$HOME/.composer/vendor/bin:$PATH"
export PATH="$HOME/.config/composer/vendor/bin:$PATH"
export PATH="$HOME/.composer/vendor/bin:$PATH"
export PATH="$HOME/.composer/vendor/bin:$PATH"
export PATH="/opt/homebrew/bin: $PATH"
export JAVA_HOME=$(/us/libexec/java_home -v 21.0.1)
export PATH=$JAVA HOME/bin:$PATHexport PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

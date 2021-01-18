# nonlinear/toolbox 

Some tested-and-true tools for creative code (mostly p5js).

Visit [nonlinear.nyc/toolbox](https://www.nonlinear.nyc/toolbox/) for the updated list.

## Install as a submodule

Go to the folder on your project you want to add toolbox folder (for instance, `_includes/` if you use jekyll), then run `git submodule add https://github.com/nonlinear/toolbox.git toolbox`

## Troubleshoot: jekyll submodule + githubpages

Github generates jekyll server-side, and submodule breaks because it renames folder with commit. Jekyll is meant to be client-side, so there's a way to prevent github from rebuilding it server-side:

1. force jekyll to generate flat blog on `docs/` folder, instead of default `_site/` by adding `destination: docs` on `config.yml`
1. push changes
1. on github settings, tell githubpages to point to `docs/` folder instead
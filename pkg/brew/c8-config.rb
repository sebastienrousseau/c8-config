# Homebrew formula for @sebastienrousseau/c8-config.
#
# A library rather than a CLI, so this is only useful to someone who wants the
# preset available outside a project's node_modules. `npm install` remains the
# supported path.
class C8Config < Formula
  desc "Shareable c8 code coverage configuration files and rules"
  homepage "https://github.com/sebastienrousseau/c8-config"
  url "https://registry.npmjs.org/@sebastienrousseau/c8-config/-/c8-config-0.0.7.tgz"
  license any_of: ["Apache-2.0", "MIT"]

  depends_on "node"

  def install
    system "npm", "install", *std_npm_args
  end

  test do
    output = shell_output("#{Formula["node"].opt_bin}/node -e " \
      "'console.log(typeof require(\"#{libexec}/lib/node_modules/@sebastienrousseau/c8-config\"))'")
    assert_equal "object", output.strip
  end
end


exports.for = function (API) {

	return {
		turn: function () {


console.log("it.pinf.lib turn:", API.getRootPath());


//console.log("CONFIG ....", API.programDescriptor);




/*
            return PINF.contextForModule(module, {
                "PINF_PROGRAM": PATH.join(__dirname, "program.json"),
                "PINF_RUNTIME": "",
                verbose: false,
                debug: false
            }, function(err, _context) {
                if (err) return done(err);
                context = _context;
                return done();
            });
*/



/*
		FS.writeFileSync(PATH.join(__dirname, "program.json"), JSON.stringify({
                "boot": {
                    "package": "../node_modules/pinf-it-bundler/test/assets/packages/" + dirname
                }
            }, null, 4));
            try { FS.removeSync(PATH.join(__dirname, ".rt")); } catch(err) {}


        });

        it("bundle - " + dirname, function(done) {
            var options = {
                distPath: PATH.join(__dirname, "assets/bundles/" + dirname)
            };
            return context.bundleProgram(options, function(err, summary) {
                if (err) return done(err);
                ASSERT.deepEqual(summary, {
                    bundles: {
                        "app.js": "./app.js"
                    }
                });
                return done();
            });
        });
*/



			return API.Q.resolve();
		}
	}

}

const fs = require('fs');
const ejs = require('ejs');
const path = require('path');


module.exports = () => {
    return async (ctx, next) => {

        /**
         *
         * @param template relative path of ejs file
         * @param data ejs template file data
         * @param options
         * @returns {Promise<void>}
         *
         */
        ctx.render = async (template, data, options) => {
            let templatePath = path.join(__dirname, template);
            if (fs.existsSync(templatePath)) {
                ctx.body = await ejs.renderFile(template, data)
            } else {
                ctx.status = 404;
                ctx.body = {message: `template '${template}' do not exists`};
            }
        };
        await next();
    }
};
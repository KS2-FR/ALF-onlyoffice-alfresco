/*
    Copyright (c) Ascensio System SIA 2019. All rights reserved.
    http://www.onlyoffice.com
*/

if (model.widgets)
{
    for (var i = 0; i < model.widgets.length; i++)
    {
        var widget = model.widgets[i];
        if (widget.id == "WebPreview")
        {
            pObj = eval('(' + remote.call("/parashift/onlyoffice/prepare?nodeRef=" + url.args.nodeRef + "&preview=true") + ')');

            if (pObj.onlyofficeUrl && pObj.mime) {
                model.onlyofficeUrl = pObj.onlyofficeUrl;
                var mime = pObj.mime;
                delete (pObj.onlyofficeUrl);
                delete (pObj.mime);

                widget.options.pluginConditions = jsonUtils.toJSONString([{
                    attributes: {
                        mimeType: mime
                    },
                    plugins: [{
                        name: "onlyoffice",
                        attributes: {
                            config: pObj
                        }
                    }]
                }]);
            }
        }
    }
}
import { IApi } from 'umi';
import main from '@bewd/log-app-info';

export default function umiPluginLogAppInfo(api: IApi) {
  api.describe({
    key: 'umi-plugin-log-app-info',
    config: {
      schema(joi) {
        return joi.string();
      },
      onChange: api.ConfigChangeType.reload,
    },
    enableBy: api.EnableBy.register,
  });
  api.addHTMLHeadScripts(() => {
    return main(process.env.APP_VERSION || 'unknow');
  });
}

import { joinPaths } from '@/utils';
import { RouteIdEnum } from '../enums';

export namespace RouterPaths {
  export namespace RootPaths {
    export const anyPath = '*';
    export const rootPath = '/';
    export const notFoundPath = joinPaths([RouteIdEnum.Root, RouteIdEnum.NotFound]);
    export const internalServerErrorPath = joinPaths([
      RouteIdEnum.Root,
      RouteIdEnum.InternalServerError,
    ]);
  }

  export namespace RegisterPaths {
    export const inscriptionPath = joinPaths([RouteIdEnum.Root, RouteIdEnum.Register]);
  }

  export namespace AuthPaths {
    export const loginPath = joinPaths([RouteIdEnum.Root, RouteIdEnum.Auth, RouteIdEnum.Login]);

    export const forgetPasswordPath = joinPaths([
      RouteIdEnum.Root,
      RouteIdEnum.Auth,
      RouteIdEnum.ForgetPassword,
    ]);

    export const resetPasswordPath = joinPaths([
      RouteIdEnum.Root,
      RouteIdEnum.Auth,
      RouteIdEnum.ResetPassword,
    ]);
  }
  export namespace DashboardPaths {
    export const dashboardPath = joinPaths([RouteIdEnum.Root, RouteIdEnum.Dashboard]);
    export const homePath = joinPaths([RouteIdEnum.Root, RouteIdEnum.Dashboard, RouteIdEnum.Home]);
    export const profilePath = joinPaths([
      RouteIdEnum.Root,
      RouteIdEnum.Dashboard,
      RouteIdEnum.Profile,
    ]);

    export namespace ThemePaths {
      export const root = joinPaths([RouteIdEnum.Root, RouteIdEnum.Dashboard, RouteIdEnum.Theme]);
      export const colorsPath = joinPaths([
        RouteIdEnum.Root,
        RouteIdEnum.Dashboard,
        RouteIdEnum.Theme,
        RouteIdEnum.Colors,
      ]);
      export const typographiesPath = joinPaths([
        RouteIdEnum.Root,
        RouteIdEnum.Dashboard,
        RouteIdEnum.Theme,
        RouteIdEnum.Typographies,
      ]);
    }

    export namespace componentPaths {
      export const root = joinPaths([
        RouteIdEnum.Root,
        RouteIdEnum.Dashboard,
        RouteIdEnum.Component,
      ]);

      export namespace basePaths {
        export const rootPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
        ]);
        export const breadcrumbsPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Breadcrumbs,
        ]);
        export const tabsPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Tabs,
        ]);
        export const stepperPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Stepper,
        ]);
        export const tooltipPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Tooltip,
        ]);
        export const progressPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Progress,
        ]);
        export const spinnersPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Spinners,
        ]);
        export const cardPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Cards,
        ]);
        export const carouselPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Carousel,
        ]);
        export const paginationPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Pagination,
        ]);
        export const tablePath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Base,
          RouteIdEnum.Table,
        ]);
      }

      export namespace buttonsPaths {
        export const rootPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Buttons,
        ]);
      }

      export namespace chartsPaths {
        export const rootPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Charts,
        ]);
      }

      export namespace formsPaths {
        export const rootPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Forms,
        ]);
        export const textInputsPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Forms,
          RouteIdEnum.TextInputs,
        ]);
        export const fileInputsPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Forms,
          RouteIdEnum.FileInputs,
        ]);
        export const selectPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Forms,
          RouteIdEnum.Select,
        ]);

        export const checkAndRadioPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Forms,
          RouteIdEnum.CheckAndRadio,
        ]);

        export const rangePath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Forms,
          RouteIdEnum.Range,
        ]);
        export const colorPickerPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Forms,
          RouteIdEnum.ColorPicker,
        ]);
      }

      export namespace notificationPaths {
        export const rootPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Notifications,
        ]);

        export const alertPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Notifications,
          RouteIdEnum.Alerts,
        ]);

        export const badgePath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Notifications,
          RouteIdEnum.Badge,
        ]);

        export const modalPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Notifications,
          RouteIdEnum.Modals,
        ]);

        export const toastPath = joinPaths([
          RouteIdEnum.Root,
          RouteIdEnum.Dashboard,
          RouteIdEnum.Component,
          RouteIdEnum.Notifications,
          RouteIdEnum.Toasts,
        ]);
      }
    }
  }
}

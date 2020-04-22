/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module pro100svitlo {
		export module nfccardread {
			export class BuildConfig {
				public static class: java.lang.Class<com.pro100svitlo.nfccardread.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module pro100svitlo {
		export module nfccardread {
			export class MainActivity {
				public static class: java.lang.Class<com.pro100svitlo.nfccardread.MainActivity>;
				public startNfcReadCard(): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onPause(): void;
				public cardIsReadyToRead(): void;
				public doNotMoveCardSoFast(): void;
				public finishNfcReadCard(): void;
				public cardWithLockedNfc(): void;
				public unknownEmvCard(): void;
				public constructor();
			}
		}
	}
}

//Generics information:


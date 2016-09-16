// missing types
declare module 'annyang';
declare module 'webvr-polyfill';

// Extra variables that live on Global that
// will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var APP_VERSION: string;
declare var IS_PRODUCTION: boolean;
declare var HMR: boolean;

// Add Extra
interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}

interface ErrorConstructor extends ErrorStackTraceLimit {}

interface VRNavigator {
  getVRDisplays: any;
  getVRDevices: any;
}

interface Navigator extends VRNavigator {}


import Popup from "./Popup";

/**
 * XConnect Plugin for Open edX MFEs
 * This plugin provides a simple popup component that can be added to any MFE
 */

// Export the slots object for MFE integration
export const slots = {
  HeaderEnd: Popup,
};

// Export the component directly as well
export { Popup };

// Default export for the entire plugin
export default {
  slots,
  Popup,
};

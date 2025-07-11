
import Popup from "./Popup";

/**
 * Everything you expose to MFEs lives in this object.
 * The keys **must** match a slot identifier that the
 * target MFEs declare (HeaderEnd, FooterSlot, etc.).
 */
export const slots = {
  HeaderEnd: Popup,
};

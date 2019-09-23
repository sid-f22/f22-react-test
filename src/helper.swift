let attributedString = NSMutableAttributedString(string: "Cool New\nFashion Website.", attributes: [
  .font: UIFont(name: "Roboto-Light", size: 48.0)!,
  .foregroundColor: UIColor(red: 26.0 / 255.0, green: 71.0 / 255.0, blue: 176.0 / 255.0, alpha: 1.0),
  .kern: -1.0
])
attributedString.addAttribute(.font, value: UIFont(name: "Roboto-Bold", size: 48.0)!, range: NSRange(location: 0, length: 8))
textView.attributedText = attributedString
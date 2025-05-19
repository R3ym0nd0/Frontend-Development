# 📝 Forms

    <form action="index.php" method="POST" enctype="multipart/form-data">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Type Username" minlength="6" maxlength="15" required>
    </form>

- `Form Tag <form></form>` - **wraps input fields and sends their data to a server when you hit Submit.**
- `Input Tag <input>` - **creates a single‑line form field (text, password, email, etc..)**
- `Label Tag <lable></label>` - **ties a piece of text to a specific form control, boosting accessibility (clicking the label focuses/activates the linked input).**
        
### Form Tag Attributes:
- `action` - **URL where form data is sent when submitted**
- `method` - **HTTP method used to send data (GET or POST)**
- `enctype` - **encoding type for form data (e.g., multipart/form-data for file uploads)**
  
## Text Inputs
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Type Username" minlength="6" maxlength="15" required>

        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Type Password" minlength="6" maxlength="15" required>
  
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Type Email">

        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        
  ### Text Inputs Type Attributes (text, password, email, tel):
  - `type` - **sets the kind of input (text, password, email, tel, etc.)**
  - `id` - **unique identifier**
  - `placeholder` - **hint text shown inside the field until user types**
  - `minlength` - **minimum characters allowed**
  - `maxlength` - **maximum characters allowed**
  - `required` - **field can't be left empty**
  - `pattern` - **regex the input must match (e.g., [0-9]{3}-[0-9]{3}-[0-9]{4} for phones)**

## Number / Date
        <label for="date">Date</label>
        <input type="date" id="date">

        <label for="quantity">Quantity</label>
        <input type="number" id="quantity" min="0" max="99" value="5">
  
  ### Number / Date Type Attributes:
  - `min` - **lowest allowed value**
  - `max` - **highest allowed value**
  - `value` - **sets the default value shown in the field**

## Radio Buttons
        <p>Title</p>             <!-- group label -->
        <label><input type="radio" name="title" value="mr"> Mr.</label>
        <label><input type="radio" name="title" value="ms"> Ms.</label>
        <label><input type="radio" name="title" value="phd"> PhD.</label>
        
  ### Radio Type Attribute:
  - `name` - **groups radio buttons, only one with the same name can be selected at a time.**
  
## Select Dropdown 
        <label for="payment">Payment</label>
        <select id="payment">
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="giftcard">Giftcard</option>
        </select>
        
- `Select Tag <select></select>` - **creates a dropdown list for selecting options.**
- `Option Tag <option></option>` - **defines an item/choice inside a `<select>` dropdown.**
  
## Checkbox
        <label><input type="checkbox" id="checkbox"> I agree</label>

## Text Area
        <label for="comment">Comment</label>
        <textarea id="comment" rows="3" cols="25"></textarea>
        
- `Text Area Tag <textarea></textarea>` - **creates a multi-line text input box.**

  ### Text Area Type Attributes:
  - `rows` - **visible text lines (height of the box)**
  - `col` - **visible characters per line (width of the box)**

## File Input 
        <label for="file">File</label>
        <input type="file" id="file" accept="image/png, image/jpeg">

  ### File Type Input Type Attribute:
  - `accept` -  **limits selectable files to specific MIME types or extensions (e.g., accept="image/png, image/jpeg").**

## Action Buttons
        <input type="reset">
        <input type="submit">

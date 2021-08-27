class colorConverter {
    hexrgb(hex){
      // Figma friendly.
      // Returns object r, g, b. From 0 to 1. Map from hex 00 to ff.
      let rgb = {r:0, g:0, b:0};
      // console.log("Checking this hex:" +hex);
  
      // Check if hex. Need to use catch
      if(this.isHexadecimal(hex.substring(1))){
        hex = hex.substring(1);
        rgb.r = this.map(parseInt(hex.substring(0,2), 16), 0, 255, 0, 1);
        rgb.g = this.map(parseInt(hex.substring(2,4), 16), 0, 255, 0, 1);
        rgb.b = this.map(parseInt(hex.substring(4), 16), 0, 255, 0, 1);
        // console.log("Color converted: "+rgb);
      }
      
  
      return rgb;
    }

    hexrgb256(hex){
      let rgb = [0,0,0];
      if(this.isHexadecimal(hex.substring(1))){
        hex = hex.substring(1);
        rgb[0] = parseInt(hex.substring(0,2), 16);
        rgb[1] = parseInt(hex.substring(2,4), 16);
        rgb[2] = parseInt(hex.substring(4), 16);
      }
      return rgb;
    }

    rgb256hex(rgb){
        // RGB 0-256
        let hex = "#"+ 
            rgb[0].toString(16).padStart(2,0) + 
            rgb[1].toString(16).padStart(2,0) + 
            rgb[2].toString(16).padStart(2,0);
        return hex;
    }

    rgbhex(rgb){
        // Figma friendly RGB 0-1 to hex
        let hex = "#" + 
            this.map(rgb.r, 0, 1, 0, 255).toString(16).padStart(2,0) +
            this.map(rgb.g, 0, 1, 0, 255).toString(16).padStart(2,0) +
            this.map(rgb.b, 0, 1, 0, 255).toString(16).padStart(2,0);
        return hex;
    }

    isHexadecimal(hex){
      let regexp = /^[0-9a-fA-F]+$/;
      if(regexp.test(hex)) return true;
      return false;
    }


  
    map(value, x1, y1, x2, y2) {
      return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    }
  }
  
export {colorConverter};  
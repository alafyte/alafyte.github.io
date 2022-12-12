function calculate()
{
    let input = document.getElementsByTagName('input');
    var addr_splitted = input[0].value.split('.');
    var netmask_splitted = input[1].value.split('.');

    document.writeln(`<text style="font-family:'Segoe UI'">IP: ${addr_splitted.join('.')}</text><br>`);
    document.writeln(`<text style="font-family:'Segoe UI'">Mask: ${netmask_splitted.join('.')}</text><br>`);

    document.writeln(`<text style="font-family:'Segoe UI'">NetworkID</text>`);
    let networkid = [addr_splitted[0] & netmask_splitted[0], addr_splitted[1] & netmask_splitted[1], addr_splitted[2] & netmask_splitted[2],addr_splitted[3] & netmask_splitted[3],].join('.');
    document.writeln(`<text style="font-family:'Segoe UI'">${networkid}</text><br>`);

    document.writeln(`<text style="font-family:'Segoe UI'">HostID</text>`);
    let hostid = [addr_splitted[0] & ~netmask_splitted[0], addr_splitted[1] & ~netmask_splitted[1], addr_splitted[2] & ~netmask_splitted[2],addr_splitted[3] & ~netmask_splitted[3],].join('.');
    document.writeln(`<text style="font-family:'Segoe UI'">${hostid}</text><br>`);

    //оомагад no comments
    document.writeln(`<text style="font-family:'Segoe UI'">Broadcast</text>`);
    let broadcast = [addr_splitted[0] | (addr_splitted[0] & ~netmask_splitted[0] | (~netmask_splitted[0] & 0xFF)),addr_splitted[1] | ( addr_splitted[1] & ~netmask_splitted[1] | (~netmask_splitted[1] & 0xFF)), addr_splitted[2] | (addr_splitted[2] & ~netmask_splitted[2] | (~netmask_splitted[2] & 0xFF)), addr_splitted[3] | (addr_splitted[3] & ~netmask_splitted[3] | (~netmask_splitted[3] & 0xFF))].join('.');

    document.writeln(`<text style="font-family:'Segoe UI'">${broadcast}</text>`);
}
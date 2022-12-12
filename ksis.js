function calculate()
{
    let input = document.getElementsByTagName('input');
    var addr_splitted = input[0].value.split('.');
    var netmask_splitted = input[1].value.split('.');

    document.writeln(`IP: ${addr_splitted.join('.')}<br>`);
    document.writeln(`Mask: ${netmask_splitted.join('.')}<br>`);

    document.writeln("NetworkID");
    let networkid = [addr_splitted[0] & netmask_splitted[0], addr_splitted[1] & netmask_splitted[1], addr_splitted[2] & netmask_splitted[2],addr_splitted[3] & netmask_splitted[3],].join('.');
    document.writeln(networkid + "<br>");

    document.writeln("HostID");
    let hostid = [addr_splitted[0] & ~netmask_splitted[0], addr_splitted[1] & ~netmask_splitted[1], addr_splitted[2] & ~netmask_splitted[2],addr_splitted[3] & ~netmask_splitted[3],].join('.');
    document.writeln(hostid + "<br>");

    //оомагад no comments
    document.writeln("Broadcast");
    let broadcast = [addr_splitted[0] | (addr_splitted[0] & ~netmask_splitted[0] | (~netmask_splitted[0] & 0xFF)),addr_splitted[1] | ( addr_splitted[1] & ~netmask_splitted[1] | (~netmask_splitted[1] & 0xFF)), addr_splitted[2] | (addr_splitted[2] & ~netmask_splitted[2] | (~netmask_splitted[2] & 0xFF)), addr_splitted[3] | (addr_splitted[3] & ~netmask_splitted[3] | (~netmask_splitted[3] & 0xFF))].join('.');

    document.writeln(broadcast);
}
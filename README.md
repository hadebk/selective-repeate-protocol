# selective-repeate-protocol
selective repeate protocol is a data link layer protocol that uses sliding window method for reliable delivery of data frames. Here, only the erroneous or lost frames are retransmitted, while the good frames are received and buffered.

# Working Principle
Selective Repeat protocol provides for sending multiple frames depending upon the availability of frames in the sending window, even if it does not receive acknowledgement for any frame in the interim. The maximum number of frames that can be sent depends upon the size of the sending window.

The receiver records the sequence number of the earliest incorrect or un-received frame. It then fills the receiving window with the subsequent frames that it has received. It sends the sequence number of the missing frame along with every acknowledgement frame.

The sender continues to send frames that are in its sending window. Once, it has sent all the frames in the window, it retransmits the frame whose sequence number is given by the acknowledgements. It then continues sending the other frames.

# Usage
- click on'send' button to send the packets.
- click on the packet as it moves to lose it, and you'll see on the side screen that the packet has been lost.
- After the arrival of the packets the reciver will send a message (acknowledgement) that this packets has arrived successfully in the case of non-arrival of the packets and the reciver dose not recive (acknowledgement), the sender will send the packets missing again until he gets the (acknowledgement).

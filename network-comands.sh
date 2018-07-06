#!/bin/bash
# returns ping time in ms and the date
ping google.com | awk '{printf substr($8,6)  " ms " strftime() "\n"}'
